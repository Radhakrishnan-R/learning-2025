"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({error, reset}) => {

  const router = useRouter();
    console.log(error.message);
    function handleError(){
      startTransition(() => {
        router.refresh();
        reset();
      })
    }

  return (
    <div>Something went wrong
      <button onClick={handleError}>Try again</button>
    </div>
  )
}

export default ErrorBoundary;