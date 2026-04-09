'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
    
      async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
    
        try {
          if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
          }

          // future signup logic here

          router.push("/dashboard");
        } catch (error) {
          console.error(error);
          setError("Something went wrong");
        } finally {
          setLoading(false);
        }
      }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-sm mx-auto min-w-full min-h-screen flex items-center justify-center"
    >
      <div className="min-h-96 flex flex-col justify-center items-center min-w-72 gap-2 p-2">
        <h1 className="text-2xl font-semibold">Sign Up</h1>

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
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

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Button type="submit" className="cursor-pointer w-full">
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </div>
      <p className="text-sm">Already have an account? Sign in</p>
    </form>
  );
}

export default SignUpPage