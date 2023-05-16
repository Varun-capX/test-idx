import {
	U64Event,
	StringEvent,
	PubkeyEvent,
	U8Event,
	SampleEntity
} from '../Interfaces';

import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
export async function handleU64Event(params : U64Event) {
	let entity = new SampleEntity();
	entity.load(params["primKey"]);
	if (entity.PrimaryEntity == undefined) {
		// checking if the load failed to find anything
	}
}

export async function handleStringEvent(params : StringEvent) {
	//TODO: Implement
}

export async function handlePubkeyEvent(params : PubkeyEvent) {
	//TODO: Implement
}

export async function handleU8Event(params : U8Event) {
	//TODO: Implement
}

