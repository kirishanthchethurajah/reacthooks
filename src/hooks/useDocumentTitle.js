import { useEffect } from "react";

export default function useDocumentTitle(title) {
  // Mount, update
  useEffect(() => {
    document.title = title;
    //un mount
    return () => {
      console.log("clean up");
    };
  });
}
