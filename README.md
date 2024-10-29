<p align="center">
   <br/>
   <h2 align="center">centsible.</h2>
   <p align="center">Track your income and spendings. The budget app that you always wanted.</p>
</p>

<hr/>

## Tech stacks

- Node.js 18
- Next.js 13
- NextAuth 4
- TailwindCSS
- TypeScript
- MongoDB (Mongoose)

### 1. Clone the repository and install dependencies

```
git clone https://github.com/manjillama/centsibl.git
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, GitHub, Email, etc).

### 3. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Or run the development server with Docker:

```
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
