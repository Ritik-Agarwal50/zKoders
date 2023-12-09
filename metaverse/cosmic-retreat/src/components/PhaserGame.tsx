// PhaserGame.tsx
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const PhaserGame: React.FC = () => {
	const phaserGameRef = useRef<Phaser.Game | null>(null);

	useEffect(() => {
		// Phaser game configuration
		const config: Phaser.Types.Core.GameConfig = {
			type: Phaser.AUTO,
			width: 800, // Adjust the width as needed
			height: 400, // Adjust the height as needed
			parent: "phaser-game-container",
			physics: {
				default: "arcade",
				arcade: {
					gravity: { y: 0 },
					debug: true, // Set to true for debugging physics
				},
			},
			scene: {
				preload: preload,
				create: create,
				update: update,
			},
		};

		// Initialize Phaser game only if it hasn't been initialized yet
		if (!phaserGameRef.current) {
			phaserGameRef.current = new Phaser.Game(config);
		}

		// Phaser preload function
		function preload(this: Phaser.Scene) {
			// Load assets (add more as needed)
			this.load.image("background", "/assets/background.jpg");
			this.load.image("block", "/assets/block.png");
		}

		// Phaser create function
		function create(this: Phaser.Scene) {
			// Set the background image to cover the entire game area without repeating
			const background = this.add
				.image(
					(config.width as number) / 2,
					(config.height as number) / 2,
					"background"
				)
				.setOrigin(0.5, 0.5);
			background.displayWidth = (config.width as number) || 0;
			background.displayHeight = (config.height as number) || 0;
		}

		// Phaser update function (will be used for game logic)
		function update(this: Phaser.Scene) {
			// Game update logic goes here
		}
	}, []);

	return (
		<div
			id='phaser-game-container'
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		/>
	);
};

export default PhaserGame;
