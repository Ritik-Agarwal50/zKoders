// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract Bharat is ERC1155, ERC1155Pausable, Ownable, ERC1155Burnable {
    constructor(address initialOwner) ERC1155("") Ownable(initialOwner) {}

    // In case of emergency smart contract can be paused using this by Owner
    function pause() public onlyOwner {
        _pause();
    }

    // Once everything is okay paused contract can be then unpaused using this by Owner
    function unpause() public onlyOwner {
        _unpause();
    }

    // Getting the hash from frontend and backend to verify the user and then minting the token accordingly
    function areEqual(
        uint256 fromFrontend,
        uint256 fromBackend,
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        require(fromFrontend == fromBackend, "Unable to verify you!!!!");
        _mint(account, id, amount, data);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Pausable) {
        super._update(from, to, ids, values);
    }
}
