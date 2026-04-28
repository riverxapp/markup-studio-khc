Patch plan:
- Review if restaurant landing requirements necessitate route changes (they do not; core is `/` and 404 fallback).
- Ensure semantic naming and comments match new purpose.
- The file layout is largely correct; the only minor improvement is to clarify structure for a clear marketing route, as per restaurant design intent.
- No additional dependencies/routes required.

File changes:
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/NotFoundPage";

// Restaurant landing: main marketing page and fallback.
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

Dependency changes:
(none)

Validation steps:
- Confirm root route `/` loads the restaurant landing page.
- Confirm 404 renders for all unmatched routes.
- Ensure AppLayout is consistently applied to all pages.