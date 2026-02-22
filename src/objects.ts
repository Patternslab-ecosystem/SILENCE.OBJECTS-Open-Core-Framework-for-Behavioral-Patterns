/**
 * SILENCE.OBJECTS - Public Object Contract
 * Defines the structure of a behavioral record.
 */

export type ObjectId = string;
export type ObjectDomain = "work" | "relationship" | "self" | "other";

export interface RawObject {
  id: ObjectId;
  userId?: string;
  text: string; // Min. 10 characters
  domain?: ObjectDomain;
  createdAt: string; // ISO format
}

export interface InterpretationPhase {
  name: "context" | "tension" | "meaning" | "function";
  content: string;
  confidence: number;
}
