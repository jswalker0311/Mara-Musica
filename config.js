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
  bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VkqtF8aiI8eKELlLjhH7FpdzkByY0_Q-K1HTFxP8M39WAOsNZHzFZH6DrC4w1rTqGsTy2OUus",

  email: "contactwalkerjames@gmail.com",               // ← REPLACE

  socials: {                                    // ← REPLACE with your profile links
    Instagram: "https://www.instagram.com/mara_musica__/",
    Spotify: "https://open.spotify.com/playlist/6ddU5xIpNHZaGOjtfB6ibF?si=a138049deaa54785",
  },

  /* ---- ACCOLADES ---------------------------------------------------------
     The credibility strip under the hero. Keep each one short and true.
  ------------------------------------------------------------------------- */
  accolades: [
    { figure: "Gold",        label: "Worked with grammy nominated and RIAA Gold certified songwriters" },
    { figure: "BBC",       label: "Artists I've produced played on BBC radio" },
    { figure: "Hot Press", label: "Featured in Hot Press" },
    { figure: "IMRO",      label: "Featured on IMRO New Music" },
  ],

  /* ---- SELECTED WORK -----------------------------------------------------
     3–4 highlight tracks with the story behind them.
     spotify: a Spotify track URL → playable embed. Leave "" for a plain card.
  ------------------------------------------------------------------------- */
  work: [
    {
      title: "Man Enough",                     // ← REPLACE
      artist: "Summer Raine",
      role: "Produced, co-wrote, Mixed & Mastered",
      tags: ["RnB"],
      spotify: "https://open.spotify.com/track/47F6PvA8HwUPMExZJrRLiw?si=d23b1fcdc915494b",
    },
    {
      title: "Redeem",                     // ← REPLACE
      artist: "SEAMUS, HALLI, Rasmus Batelly",
      role: "Produced, co-wrote & Mixed",
      tags: ["DnB", "MYE", "BBC Introducing"],
      spotify: "https://open.spotify.com/track/5kZf7Ow1lY3xbMsJRav7ou?si=791f8626b9d44358",
    },
    {
      title: "Faithless (Sacrifice) Remix",                     // ← REPLACE
      artist: "Lex Bucha",
      role: "Remixed",
      tags: ["DnB", "Featured on Hot Press"],
      spotify: "https://open.spotify.com/track/4TCOPDt543UmBMeYUejwlK?si=a58c2a833b4d4db1",
    },
    {
      title: "Exothermic Girl",                     // ← REPLACE
      artist: "HALLI",
      role: "Produced, co-wrote, Mixed & Mastered",
      tags: ["RnB", "BBC Introducing"],
      spotify: "https://open.spotify.com/track/1Uj4MCSSgOtFn6UGR27OZ8?si=8f232deca9934107",
    },
  ],

  /* ---- DISCOGRAPHY -------------------------------------------------------
     Everything you've produced. Shown as a full list with links.
     - playlist: a Spotify playlist URL of all your productions → big embed
     - platforms: "listen everywhere" buttons
     - releases: one row per release. url can be Spotify, Apple, SoundCloud...
  ------------------------------------------------------------------------- */
  discography: {
    playlist: "https://open.spotify.com/playlist/6ddU5xIpNHZaGOjtfB6ibF?si=b92f7a06413a46b5",                               // ← e.g. https://open.spotify.com/playlist/...
    platforms: {                                // ← REPLACE
      Spotify: "https://open.spotify.com/",

    },
    releases: [                                 // ← REPLACE
      { year: "2026", title: "Redeem", artist: "SEAMus, HALLI, Rasmus Batelly", role: "Artist, Producer", url: "https://open.spotify.com/track/5kZf7Ow1lY3xbMsJRav7ou?si=3d6d54f3225645e7" },
      { year: "2026", title: "Man Enough", artist: "Summer Raine", role: "Producer, co-writer", url: "https://open.spotify.com/track/47F6PvA8HwUPMExZJrRLiw?si=8283b2c5912b46a4" },
      { year: "2026", title: "Faithless (Sacriice) SEAMUS Remix", artist: "Lex Bucha", role: "Producer, Remixer", url: "https://open.spotify.com/track/4TCOPDt543UmBMeYUejwlK?si=ed59878733814898" },
      { year: "2025", title: "Just an Accident", artist: "Rasmus Batelly", role: "Producer", url: "https://open.spotify.com/track/3J3XSxpdvxMKIFpap3mMfm?si=afd63ea22dce4108" },
      { year: "2025", title: "High Altitude (SEAMUS Remix)", artist: "Lex Bucha", role: "Producer, Remixer", url: "https://open.spotify.com/track/4ki8tu9ffbecpPlWsUDAZR?si=6d4f5e3cca4c47ba" },
      { year: "2025", title: "Exothermic Girl", artist: "HALLI", role: "Producer", url: "https://open.spotify.com/track/1Uj4MCSSgOtFn6UGR27OZ8?si=c8c6c940048749b9" },
    ],
  },

  /* ---- PRESS -------------------------------------------------------------
     Articles, features, radio plays, press releases.
  ------------------------------------------------------------------------- */
  press: [                                      // ← REPLACE titles + links
    { outlet: "Hot Press",       date: "2026", title: "New Irish Songs To Hear This Week",           url: "https://www.hotpress.com/music/new-irish-songs-to-hear-this-week-284-23168811" },
    { outlet: "Undrtone.", date: "2026", title: "Undrtone. Interview",            url: "https://www.undrtone.co.uk/post/seamus-on-redeem-orkney-songwriting-camps-and-balancing-emotion-with-dancefloor-impact" },
    { outlet: "PERSPECTIVE", date: "2026", title: "Lex Bucha Unleashes High-Energy Drum and Bass Remix of Faithless (Sacrifice) with SEAMUS",            url: "https://www.perspectiveonlife.nl/2026/11/lex-bucha-faithless-sacrifice-seamus-remix.html" },
    { outlet: "IMRO",            date: "2026", title: "Magnetic Magazine", url: "https://magneticmag.com/2026/04/redeem-via-make-your-era/" },
  ],

  /* ---- KIND WORDS --------------------------------------------------------
     Real quotes only. The section stays hidden while this list is empty.
     { quote: "...", name: "Artist Name", detail: "Singer-songwriter, Dublin" },
  ------------------------------------------------------------------------- */
  testimonials: [],
};
