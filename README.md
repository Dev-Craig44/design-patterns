# design-patterns

Clean implementations of classic design patterns in TypeScript with real-world examples.
Here’s your full boilerplate setup for a reusable TypeScript project with:
• Output to a dist/ folder
• Clean and build scripts
• Module settings compatible with modern tooling
• And a README copy-paste block at the bottom ✅

⸻

✅ 1. tsconfig.json

{
"compilerOptions": {
"target": "ES2020",
"module": "CommonJS",
"rootDir": "src",
"outDir": "dist",
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"strict": true,
"skipLibCheck": true,
"declaration": true,
"sourceMap": true
},
"include": ["src/**/*"]
}

⸻

✅ 2. package.json

{
"name": "template-method-pattern",
"version": "1.0.0",
"main": "dist/index.js",
"types": "dist/index.d.ts",
"scripts": {
"dev": "tsc --watch",
"build": "tsc",
"start": "node dist/index.js",
"clean": "rm -rf dist"
},
"keywords": [],
"author": "William Kelly",
"license": "MIT",
"devDependencies": {
"typescript": "^5.3.3"
}
}

You can install everything with:

npm install --save-dev typescript

⸻

✅ 3. Folder Structure

/template-method-pattern
├── src/
│ └── index.ts
├── dist/
├── tsconfig.json
└── package.json

⸻

🧠 README Code Block: Copy/Paste

# 📦 SETUP: Standard TS Project with `dist/` output

# 1. Init and install TypeScript

npm init -y
npm install --save-dev typescript

# 2. Create your folder structure

mkdir src
touch src/index.ts tsconfig.json

# 3. Paste the following into your tsconfig.json:

# {

# "compilerOptions": {

# "target": "ES2020",

# "module": "CommonJS",

# "rootDir": "src",

# "outDir": "dist",

# "esModuleInterop": true,

# "strict": true,

# "declaration": true,

# "sourceMap": true

# },

# "include": ["src/**/*"]

# }

# 4. Add scripts to package.json:

# "scripts": {

# "dev": "tsc --watch",

# "build": "tsc",

# "start": "node dist/index.js",

# "clean": "rm -rf dist"

# }

# ✅ Now you're ready to build:

npm run build
npm start
