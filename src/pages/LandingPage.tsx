import { MoviesGrid } from "@components/MoviesGrid"
import { Search } from "@components/Search"
import { useDebounce } from "@hooks/useDebounce"
import { useSearchParams } from "react-router-dom"

export function LandingPage() {
  const [query] = useSearchParams()
  const search = query.get("search")

  const debouncedSearch = useDebounce(search || "", 500)

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  )
}
