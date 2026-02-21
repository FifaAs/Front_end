# Lab 6.2 — Route Parameters & Dynamic Pages

## How to Run
```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure
```
src/
  Data.ts          # Course interface, mock data, getCourseById()
  Courses.tsx      # Course list with sorting
  CourseDetail.tsx # Dynamic course detail page
  main.tsx         # Router configuration
  index.css        # Global styles
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page |
| `/courses` | Course list |
| `/courses/:id` | Course detail page |
| `/courses/999` | Shows error — Course not found |

---

## useParams vs useSearchParams

### useParams()
Reads **URL path parameters** — the `:id` part in `/courses/:id`.
```tsx
const { id } = useParams();
// URL: /courses/3 → id = "3"
```

Used when the parameter **identifies a specific resource**.
Example: `/courses/3` — show course with ID 3.

### useSearchParams()
Reads and writes **query string parameters** — the `?sort=asc` part.
```tsx
const [searchParams, setSearchParams] = useSearchParams();
const sort = searchParams.get("sort");
// URL: /courses?sort=desc → sort = "desc"
```

Used when the parameter is **optional** and affects filtering or sorting.
Example: `/courses?sort=asc` — sort courses alphabetically.

---

## URL Params vs Query Params

| Situation | Use |
|-----------|-----|
| Identify a specific record `/courses/3` | URL param `:id` |
| Filter a list `?category=math` | Query param |
| Sort results `?sort=asc` | Query param |
| Pagination `?page=2` | Query param |
| Required part of the resource | URL param |
| Optional UI state | Query param |

---

## Key Concepts Used

- `useParams()` — reads dynamic segments from the URL path
- `useLoaderData()` — reads data returned by the route loader
- `useSearchParams()` — reads and updates query string parameters
- `loader` — runs before component renders, fetches or validates data
- `errorElement` — shown when loader throws an error (e.g. course not found)