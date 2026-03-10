# microslopify

A very important Chromium extension that does the lord's work: replacing every instance of "Microsoft" with "Microslop" on every web page you visit. Yes, every single one. You're welcome.

## why

Because someone had to do it.

## what it does

It crawls through every text node on every page like a gremlin and swaps out "Microsoft" for "Microslop". It even preserves your precious capitalization — "MICROSOFT" becomes "MICROSLOP", "Microsoft" becomes "Microslop", you get the idea. It's not rocket science, but it *is* essential.

Also watches for new content loading in, so dynamically rendered pages can't escape the sloppification. Nice try, SPAs.

## installation

1. Clone this bad boy
2. Go to `chrome://extensions`
3. Enable "Developer mode" (you're a developer now, congrats)
4. Click "Load unpacked" and point it at this folder
5. Browse the web in peace

## features

- Replaces "Microsoft" with "Microslop" (duh)
- Preserves capitalization (we're sloppy, not animals)
- Works on dynamically loaded content via MutationObserver (fancy)
- Runs on literally every URL. No page is safe

## disclaimer

This extension has zero practical value and that's the point.
