/* ==========================================================================
   SITE CONFIG — edit this file, not the HTML.
   Everything you'll want to change regularly lives here.
   Anything marked  ← REPLACE  is a placeholder.
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---- BOOKING -----------------------------------------------------------
     Paste ONE booking link here. It gets embedded in the "Book a chat" section.

     Option A — Google Calendar appointment schedule (Google Workspace):
       Calendar → Create → Appointment schedule → Save → "Share" → "Website embed"
       Copy the src URL out of the iframe code. It looks like:
       https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true

     Option B — Zoom Scheduler (unique Zoom link per booking, written straight
       into your Google Calendar):
       https://scheduler.zoom.us/your-name/consult

     Leave empty ("") to show a fallback email button instead.
  ------------------------------------------------------------------------- */
  bookingUrl: "",

  email: "hello@maramusica.com",               // ← REPLACE

  socials: {                                    // ← REPLACE with your profile links
    Instagram: "https://instagram.com/",
    Spotify: "https://open.spotify.com/",
    YouTube: "https://youtube.com/",
  },

  /* ---- ACCOLADES ---------------------------------------------------------
     The credibility strip under the hero. Keep each one short and true.
  ------------------------------------------------------------------------- */
  accolades: [
    { figure: "2×",        label: "Played on BBC Introducing this year" },
    { figure: "BBC",       label: "Artists I've produced played on BBC radio" },
    { figure: "Hot Press", label: "Featured in Hot Press" },
    { figure: "IMRO",      label: "Recognised by IMRO" },
  ],

  /* ---- SELECTED WORK -----------------------------------------------------
     3–4 highlight tracks with the story behind them.
     spotify: a Spotify track URL → playable embed. Leave "" for a plain card.
  ------------------------------------------------------------------------- */
  work: [
    {
      title: "Track title",                     // ← REPLACE
      artist: "Artist name",
      role: "Produced & co-wrote",
      tags: ["Singer-songwriter", "Amapiano drums"],
      story: "Started with two hours of talking about a friendship that fell apart. The chorus came out of something they said halfway through.",
      spotify: "",
    },
    {
      title: "Track title",                     // ← REPLACE
      artist: "Artist name",
      role: "Produced",
      tags: ["Pop", "Reggaeton groove", "BBC Introducing"],
      story: "They sent a voice memo of a melody they'd been humming for a year. We built the whole world around it over two remote sessions.",
      spotify: "",
    },
    {
      title: "Track title",                     // ← REPLACE
      artist: "Orkney songwriting camp",
      role: "Co-wrote & produced",
      tags: ["Camp session", "Acoustic"],
      story: "Five writers, one island, no phone signal. Written and tracked in a single day.",
      spotify: "",
    },
    {
      title: "Track title",                     // ← REPLACE
      artist: "Artist name",
      role: "Produced & arranged",
      tags: ["Alt-pop", "Live guitars"],
      story: "A half-finished demo that had sat on their laptop for two years. Now it's out.",
      spotify: "",
    },
  ],

  /* ---- DISCOGRAPHY -------------------------------------------------------
     Everything you've produced. Shown as a full list with links.
     - playlist: a Spotify playlist URL of all your productions → big embed
     - platforms: "listen everywhere" buttons
     - releases: one row per release. url can be Spotify, Apple, SoundCloud...
  ------------------------------------------------------------------------- */
  discography: {
    playlist: "",                               // ← e.g. https://open.spotify.com/playlist/...
    platforms: {                                // ← REPLACE
      Spotify: "https://open.spotify.com/",
      "Apple Music": "https://music.apple.com/",
      SoundCloud: "https://soundcloud.com/",
    },
    releases: [                                 // ← REPLACE
      { year: "2026", title: "Release title", artist: "Artist name", role: "Producer", url: "" },
      { year: "2026", title: "Release title", artist: "Artist name", role: "Producer, co-writer", url: "" },
      { year: "2026", title: "Release title", artist: "Artist name", role: "Producer", url: "" },
      { year: "2025", title: "Release title", artist: "Artist name", role: "Producer, mix", url: "" },
      { year: "2025", title: "Release title", artist: "Artist name", role: "Co-writer", url: "" },
      { year: "2024", title: "Release title", artist: "Artist name", role: "Producer", url: "" },
    ],
  },

  /* ---- PRESS -------------------------------------------------------------
     Articles, features, radio plays, press releases.
  ------------------------------------------------------------------------- */
  press: [                                      // ← REPLACE titles + links
    { outlet: "Hot Press",       date: "2026", title: "Feature title goes here",           url: "" },
    { outlet: "BBC Introducing", date: "2026", title: "Radio play: track name",            url: "" },
    { outlet: "BBC Introducing", date: "2026", title: "Radio play: track name",            url: "" },
    { outlet: "IMRO",            date: "2026", title: "Recognition / award / showcase name", url: "" },
  ],

  /* ---- KIND WORDS --------------------------------------------------------
     Real quotes only. The section stays hidden while this list is empty.
     { quote: "...", name: "Artist Name", detail: "Singer-songwriter, Dublin" },
  ------------------------------------------------------------------------- */
  testimonials: [],
};
