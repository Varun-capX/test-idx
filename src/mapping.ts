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
	entity.load((params.data).toString());
	if (entity.PrimaryEntity == undefined) {
		entity.PrimaryEntity = (params.data).toString();
	}
	entity.NonPrimaryEntity = (params.label);
	entity.save();
}

export async function handleStringEvent(params : StringEvent) {
	let entity = new SampleEntity();
	entity.load((params.data).toString());
	if (entity.PrimaryEntity == undefined) {
		entity.PrimaryEntity = (params.data).toString();
	}
	entity.NonPrimaryEntity = (params.label);
	entity.save();
}

export async function handlePubkeyEvent(params : PubkeyEvent) {
	let entity = new SampleEntity();
	entity.load((params.data).toString());
	if (entity.PrimaryEntity == undefined) {
		entity.PrimaryEntity = (params.data).toString();
	}
	entity.NonPrimaryEntity = (params.label);
	entity.save();
}

export async function handleU8Event(params : U8Event) {
	let entity = new SampleEntity();
	entity.load((params.data).toString());
	if (entity.PrimaryEntity == undefined) {
		entity.PrimaryEntity = (params.data).toString();
	}
	entity.NonPrimaryEntity = (params.label);
	entity.save();
}

