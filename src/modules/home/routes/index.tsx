import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/molecules/loader";

const ContactLazyComponent = lazy(() => import("../../contacts"));
const CreateContactLazyComponent = lazy(
  () => import("../../contacts/components/create-contact")
);
const EditContactLazyComponent = lazy(
  () => import("../../contacts/components/edit-contact")
);
const StatsLazyComponent = lazy(() => import("../../stats"));

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <ContactLazyComponent />
          </Suspense>
        }
      />
      <Route
        path="/contact_form"
        element={
          <Suspense fallback={<Loader />}>
            <CreateContactLazyComponent />
          </Suspense>
        }
      />
      <Route
        path="/stats"
        element={
          <Suspense fallback={<Loader />}>
            <StatsLazyComponent />
          </Suspense>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Suspense fallback={<Loader />}>
            <EditContactLazyComponent />
          </Suspense>
        }
      />
    </Routes>
  );
}
