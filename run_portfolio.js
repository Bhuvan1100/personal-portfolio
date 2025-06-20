import { spawn } from 'child_process';
import path from 'path';

// Simple script to run the portfolio frontend
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: path.join(process.cwd(), 'client'),
  stdio: 'inherit'
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
});