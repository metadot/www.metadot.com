"use client";

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
    currentPage - 1 === 1 ? `${basePath}/` : `${basePath}/${currentPage - 1}`;
  const nextPage = `${basePath}/${currentPage + 1}`;

  return (
    <nav
      aria-label="page navigation"
      className="hidden md:flex justify-center items-center"
    >
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <a href={prevPage} className="page-link">
              ‹ Previous
            </a>
          </li>
        )}

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const href = page === 1 ? "/blog" : `/blog/${page}`;
          const isActive = page === currentPage;
          return (
            <li key={page} className={`page-item ${isActive ? "active" : ""}`}>
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

        {currentPage < totalPages && (
          <li className="page-item">
            <a href={nextPage} className="page-link">
              Next ›
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
