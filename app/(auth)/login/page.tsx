'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error) {
        setError(error.message);
        return;
      }

      router.push('/dashboard')
      
    } catch (error) {
      console.error(error)
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-sm mx-auto min-w-full min-h-screen flex items-center justify-center flex-col"
    >
      <div className="min-h-80 flex flex-col justify-center items-center min-w-72 gap-2 p-2">
        <h1 className="text-2xl font-semibold">Login</h1>

        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit" className="cursor-pointer">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
      <p className="text-sm">Don't have an account? <Link href="/sign-up" className="font-semibold">sign-up</Link></p>
    </form>
  );
}

export default LoginPage