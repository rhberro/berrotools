import { Anchor } from "@/components/anchor";
import { Button } from "@/components/button";
import { Heading1 } from "@/components/heading1";
import { Paragraph } from "@/components/paragraph";
import { Separator } from "@/components/separator";
import { SignupForm } from "@/modules/authentication";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Signup() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center p-6">
      <div className="flex flex-col flex-1 w-full max-w-[400px]">
        <Heading1>Get started</Heading1>
        <Paragraph>Create a new account</Paragraph>
        <Button className="mt-10" size="large" variant="outline" disabled>
          <GitHubLogoIcon className="w-6 h-6 text-stone-700" />
          Continue with GitHub
        </Button>
        <Separator />
        <SignupForm />
        <Separator />
        <Paragraph className="text-center" size="medium">
          Have an account? <Anchor href="/signin">Sign In Now</Anchor>
        </Paragraph>
      </div>
    </main>
  );
}
