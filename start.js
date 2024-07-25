// start.js
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import ora from 'ora';
import gradient from 'gradient-string';
import { exec } from 'child_process';
import { promisify } from 'util';

// 将figlet的callback方式改为Promise方式
const figletAsync = promisify(figlet);

// 延迟函数
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  try {
    // 添加加载动画
    const loadingSpinner = ora('Loading...').start();

    // 设置延迟
    await delay(1000); // 模拟加载时间

    // 停止加载动画
    loadingSpinner.stop();

    const data = await figletAsync('Nim Admin');

    // 使用gradient-string生成渐变效果的艺术字
    const asciiArt = gradient.pastel.multiline(data);

    // 清除控制台
    console.clear();

    // 动态逐行显示文字
    const lines = asciiArt.split('\n');
    for (const line of lines) {
      console.log(line);
      await delay(100); // 每行之间的延迟
    }

    // 使用boxen和chalk美化输出
    const message = boxen(lines.join('\n'), {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'cyan',
    });

    console.clear(); // 再次清除控制台以确保不会显示重复的内容
    console.log(message);

    // 添加加载动画
    const spinner = ora('Starting Next.js dev server...').start();

    // 启动Next.js dev server
    const nextProcess = exec('next dev -p 8099', (error, stdout, stderr) => {
      if (error) {
        spinner.fail(`Failed to start Next.js dev server: ${error.message}`);
        return;
      }
      spinner.succeed('Next.js dev server started successfully!');

      console.log(chalk.green('Server information:'));
      console.log(chalk.blue('Local: ') + chalk.underline('http://localhost:8090'));

      console.log(chalk.green('\nReady to code!'));
      console.log(chalk.yellow('Press CTRL+C to stop the server.'));
    });

    // 将Next.js输出流重定向到当前进程的stdout和stderr
    nextProcess.stdout.pipe(process.stdout);
    nextProcess.stderr.pipe(process.stderr);
  } catch (err) {
    console.error('Something went wrong...', err);
  }
})();
