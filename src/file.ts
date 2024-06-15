import { readFile, unlink, writeFile } from "fs/promises"

const exec = async () => {

    const fileName = './teste.txt'

    await unlink(fileName)
}

exec()