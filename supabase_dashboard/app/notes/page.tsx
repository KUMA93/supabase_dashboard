// "use client";

import { createClient } from "@/utils/supabase/server";
import { useEffect, useState } from "react";

export default async function Page() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  // 대안적으로 use client 컴포넌트를 사용할 수 있다.
//   const [notes2, setNotes] = useState<any[] | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//         const { data } = await supabase.from('notes').select()
//         setNotes(data)
//     }
//   })

  return <pre>
    {JSON.stringify(notes, null, 2)}
    </pre>;
}
