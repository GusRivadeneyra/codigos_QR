import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const Codes = new Schema({
	QrTitle: { type: String },
	Description: { type: String },
	url: { type: String }
});

export const CodesModel = model('product', Codes)