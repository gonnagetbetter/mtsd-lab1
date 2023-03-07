# Quadratic Equation Solver

This is simple console script that calculates roots of equation like $ax^2+bx+c=0$, where $a \neq 0$. 

There are two mods: interactive and non-interactive (file mode). In interactive mode, user writes coefficients himself. In the non-interactive mode, the coefficients are passed as command line arguments.

## Requirements
- Node.js v12.16.1 or higher

## How to install?

1. Install git and Node.JS 
```bash
  sudo apt install nodejs
  sudo apt install git
```
2.Сlone the repository to your local machine

```bash
git clone git@github.com:gonnagetbetter/mtsd-lab1.git
```
## How to use?

You should run such commands in cloned repository

### Interactive mode

```bash
node main.js
```
Then you will have oppurtunity to write coefficients and script will calculate roots for you.

### File mode

```bash
node app.js path/to/file
```
The script will parse the coefficients from the file and output the roots of the equation.  

> **Note**

>Your file should have appropriate structure: `a b c\n`, where `a`, `b` and `c` are the coefficients of the equation and \n is new line symbol. The file shouldn't contain any other symbols or format. It will cause the script to fail.

## Reverted commit




