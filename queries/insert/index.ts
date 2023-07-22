import { getSupabaseClient } from "../getSupabaseClient";
import { Tables } from "../tables";

const supabase = getSupabaseClient();

export const getIsSuccess = (responseCode: number) => {
  return [200, 201, 204].includes(responseCode);
};

export interface Musician {
  name: string;
  instrument?: string;
  image_url?: string;
  bio?: string;
}

export interface Band {
  name: string;
  genre?: string;
  description?: string;
  image_url?: string;
  website?: string;
}
export interface MusicianBand {
  musician_id: number;
  band_id: number;
  role?: string;
}

export interface Venue {
  name: string;
  address: string;
  capacity?: number;
  description?: string;
  image_url?: string;
  website?: string;
}

export interface Event {
  band_id: number;
  venue_id: number;
  date_time: Date;
  ticket_price?: number;
  description?: string;
  event_url?: string;
}

export const createMusician = async (musician: Musician) => {
  const { data, error, status } = await supabase
    .from(Tables.Musician)
    .insert(musician);
  if (error) {
    throw new Error(error.message);
  }
  return status;
};

export const createBand = async (band: Band) => {
  const { data, error, status } = await supabase.from(Tables.Band).insert(band);
  if (error) {
    throw new Error(error.message);
  }
  return status;
};

export const createVenue = async (venue: Venue) => {
  const { data, error, status } = await supabase
    .from(Tables.Venue)
    .insert(venue);
  if (error) {
    throw new Error(error.message);
  }
  return status;
};

export const createEvent = async (event: Event) => {
  const { data, error, status } = await supabase
    .from(Tables.Event)
    .insert(event);
  if (error) {
    throw new Error(error.message);
  }
  return status;
};

export const createMusicianBandLink = async (
  musicianBandLink: MusicianBand
) => {
  const { data, error, status } = await supabase
    .from(Tables.MusicianBand)
    .insert(musicianBandLink);
  if (error) {
    throw new Error(error.message);
  }
  return status;
};
