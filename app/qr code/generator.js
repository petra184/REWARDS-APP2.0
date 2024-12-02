import supabase from "../../supabase/supabaseClient";

async function GenerateQRCode(userId) {
  try {
    // Fetch the 'id' from the qr_codes table using Supabase
    const { data, error } = await supabase
      .from("qr_codes")
      .select("id")
      .eq("user_id", userId)
      .single(); 

    if (error) {
      console.error("Error fetching value from Supabase:", error);
      return null;
    }

    return data.id; // Return the value directly
  } catch (err) {
    console.error("Error fetching value:", err);
    return null;
  }
}
export default GenerateQRCode;