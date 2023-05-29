import bcrypt from "bcrypt";

async function hashedPassword(password) {
    const saltRound = 10;
    const hashed = await bcrypt.hash(password, saltRound);
    return hashed;
}

async function comparePassword(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match
}

export {
    hashedPassword,
    comparePassword
}