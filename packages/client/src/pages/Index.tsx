import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

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

function Index() {
  const navigate = useNavigate();

  const defaultValues = {
    url: "https://music.apple.com/us/album/eoo/1787022393?i=1787023929",
  };

  const form = useForm({
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
