import { Anchor } from "@/components/anchor";
import { Button } from "@/components/button";
import { Heading1 } from "@/components/heading1";
import { Paragraph } from "@/components/paragraph";
import { Separator } from "@/components/separator";
import { SigninForm } from "@/modules/authentication";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Signin() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center p-6">
      <div className="flex flex-col flex-1 w-full max-w-[400px]">
        <Heading1>Welcome back</Heading1>
        <Paragraph>Sign in to your account</Paragraph>
        <Button className="mt-10" size="large" variant="outline" disabled>
          <GitHubLogoIcon className="w-6 h-6 text-stone-700" />
          Continue with GitHub
        </Button>
        <Separator />
        <SigninForm />
        <Separator />
        <Paragraph className="text-center" size="medium">
          Don&apos;t have an account? <Anchor href="/signup">Sign Up Now</Anchor>
        </Paragraph>
      </div>
    </main>
  );
}
