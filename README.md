# Goodwin Front-end Assignment

Hey there team Goodwin! Welcome to the my front-end assignment repo.

Here's some info: I used the [Mantine Next.js template](https://github.com/mantinedev/next-app-template) to get me started.

I've never used Mantine before. It's pretty nice, and I enjoyed it.

Feel free to ask me any questions, but I left some comments in the code explaning why I did certain things (mainly because this is an exercise).

If I went forward with this: I'd create Storybook stories for the components, abstract out more reusable components, add more fallbacks, etc. There's always room to make everything better.

Let me know what you think, and thanks for checking it out.

### Criteria
* Must use NYTimes API to display a list of items (travel and aviation related)
* Each item must show a preview of content
* When clicking on an item, it should show additional information
* Must use Next.js
* Must have unit tests
* Opitional: have a search bar where users can look up new search terms and the items update to reflect those terms.
* You can use any component library, but we use [mantine.dev](https://www.mantine.dev/)

## NOTE: You need a NYTimes API Key!
This will not work without a NYTimes API key. It takes about 30 seconds to sign up here: https://developer.nytimes.com/apis and make sure to enable the 'Article Search API'.

Once you have this key, put it in a `.env.local` file as `NEXT_PUBLIC_NYTIMES_API_KEY=XXX`. Since
this is just a demo/exercise, the key will be exposed on the client side. There are
many sane and secure solutions to not expose this key, but let's march on for the sake of a demo.

## npm scripts
- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts


