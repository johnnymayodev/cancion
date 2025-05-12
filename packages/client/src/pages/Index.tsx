import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { H1 } from "@/components/typography/H1";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// example url: https://music.apple.com/us/album/tití-me-preguntó/1622045624?i=1622045635

const schema = z.object({
  url: z
    .string()
    .url({ message: "Please enter a valid url" })
    .refine(
      (url) => {
        if (!url) return false;
        try {
          const urlObj = new URL(url);
          return urlObj.hostname === "music.apple.com";
        } catch (error) {
          return false;
        }
      },
      {
        message: "Please enter a valid url",
      },
    ),
});

function Index() {
  const navigate = useNavigate();

  const defaultValues = {
    url: "https://music.apple.com/us/album/tití-me-preguntó/1622045624?i=1622045635",
    // url: "",
  };

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues,
  });

  const onSubmit = (data: any) => {
    navigate(`/lyrics?url=${data.url}`);
  };

  return (
    <div className="flex flex-col justify-center gap-8">
      <H1 className="text-center">Canción</H1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Song Link</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription className="text-sm">
                    Enter the share link of a song from Apple Music.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Index;
