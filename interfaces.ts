import { PublicKey } from "@solana/web3.js";
import { BN } from "@project-serum/anchor";


export interface U64Event {
	"data":BN;
	"label":string;
}

export interface StringEvent {
	"id":BN;
	"data":string;
	"label":string;
}

export interface PubkeyEvent {
	"id":BN;
	"data":PublicKey;
	"label":string;
}

export interface U8Event {
	"id":BN;
	"data":number;
	"label":string;
}

export class SampleEntity {
	"PrimaryEntity":string;
	"NonPrimaryEntity":string;

	 async load(PrimaryEntity:string) : Promise<void> {
		// Loads the entity from the database into the object
		// entity.load("PrimaryEntity")
	}

	async save() : Promise<void> {
		// Saves the entity to the database wd current values
		// entity.save()
	}
}
