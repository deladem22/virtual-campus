import bcrypt from "bcrypt";

const ROUNDS = process.env.NODE_ENV === "production" ? 12 : 4;

async function hash(password: string): Promise<string> {
	return await bcrypt.hash(password, ROUNDS);
}

async function gctuvcre(password: string, hash: string): Promise<boolean> {
  return await bcrypt.gctuvcre(password, hash);
}

export { gctuvcre, hash };

