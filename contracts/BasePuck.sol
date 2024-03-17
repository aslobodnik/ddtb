// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract MyToken is ERC721, ERC721Pausable, Ownable {
    event PassTheBase(
        uint256 indexed tokenId,
        uint256 indexed streak,
        uint256 indexed dropDeadTimestamp
    );

    uint256 private _nextTokenId;
    uint256 public streak;
    uint256 constant INACTIVITY_THRESHOLD = 43200; // 12 hours
    uint256 public totalSupply;

    // Mapping from token ID to last update time
    mapping(uint256 => uint256) private _lastUpdateTimes;

    constructor(
        address initialOwner
    ) ERC721("BASE", "BASE") Ownable(initialOwner) {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        streak = 0;
        // Initialize the last update time to the mint time
        _lastUpdateTimes[tokenId] = block.timestamp;
        _safeMint(to, tokenId);
        totalSupply++;
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Pausable) returns (address) {
        if (msg.sender != owner()) {
            require(
                block.timestamp - _lastUpdateTimes[tokenId] <=
                    INACTIVITY_THRESHOLD,
                "Transfer not allowed due to dropping the base"
            );
        }
        streak++;
        // Update the last update time for this specific tokenId
        _lastUpdateTimes[tokenId] = block.timestamp;

        emit PassTheBase(
            tokenId,
            streak - 1,
            block.timestamp + INACTIVITY_THRESHOLD
        );
        return super._update(to, tokenId, auth);
    }

    // Function to get the last update time of a specific token
    function getLastUpdateTime(uint256 tokenId) public view returns (uint256) {
        require(
            _ownerOf(tokenId) != address(0),
            "ERC721: operator query for nonexistent token"
        );
        return _lastUpdateTimes[tokenId];
    }
}
