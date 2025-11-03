import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  const prevPage =
    currentPage - 1 === 1
      ? `${basePath}/`
      : `${basePath}/page/${currentPage - 1}`;
  const nextPage = `${basePath}/page/${currentPage + 1}`;

  return (
    <nav
      aria-label="page navigation"
      className=" md:flex justify-center items-center"
    >
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <Link href={prevPage} className="page-link">
              <span className="hidden md:inline">‹ Previous</span>
              <span className="md:hidden">‹</span>
            </Link>
          </li>
        )}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const href = page === 1 ? "/blog" : `/blog/page/${page}`;
          const isActive = page === currentPage;
          return (
            <li
              key={page}
              className={`hidden md:list-item page-item ${
                isActive ? "active" : ""
              }`}
            >
              <a
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="page-link"
              >
                {page}
              </a>
            </li>
          );
        })}

        <li className="md:hidden page-item active">
          <a
            href={
              currentPage === 1 ? basePath : `${basePath}/page/${currentPage}`
            }
            aria-current="page"
            className={`page-link ${
              currentPage === 1
                ? "rounded-l" // first page
                : currentPage === totalPages
                ? "rounded-r" // last page
                : "" // middle page
            }`}
          >
            {currentPage}
          </a>
        </li>

        {currentPage < totalPages && (
          <li className="page-item">
            <Link href={nextPage} className="page-link">
              <span className="hidden md:inline">Next ›</span>
              <span className="md:hidden">›</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
