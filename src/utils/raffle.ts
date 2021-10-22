import { Raffle } from "../models/raffle";
import { firestore } from "./firebase"


export const getRaffles = async () => {
    let data: Raffle[] = [];

    const result = await firestore.collection('raffles').get();

    data = result.docs.map(item => item.data()) as Raffle[];

    return data;
}

export const saveRaffles = async (data: Raffle) => {
    const result = await firestore.collection('raffles')
        .where('number', 'array-contains-any', data.numbers)
        .get();

    if (result.docs.length) {
        throw new Error(' Este número não está mais disponível ');
    }

    await firestore.collection('raffles').doc().set(data);
}