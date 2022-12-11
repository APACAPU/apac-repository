import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [search, setSearch] = useState();

  function findSearch(value) {
    setSearch(value.target.value);
  }

  return (
    <header className="py-4 mb-3">
      <div className="container">
        <div className="text-center my-2">
          <div className="input-group">
            <input
              onChange={findSearch}
              className="form-control"
              type="text"
              placeholder="Search by title or category"
            />
            <Link
              className="btn btn-primary"
              id="button-search"
              href={{
                pathname: "/Search",
                query: { q: search?.toLowerCase() },
              }}
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
