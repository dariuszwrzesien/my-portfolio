import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export enum CONTACT_FORM_FIELDS {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

const formSchema = z.object({
  [CONTACT_FORM_FIELDS.NAME]: z.string().min(2).max(100),
  [CONTACT_FORM_FIELDS.EMAIL]: z.email(),
  [CONTACT_FORM_FIELDS.MESSAGE]: z.string().min(5).max(1000),
});

const DEFAULT_VALUES = {
  [CONTACT_FORM_FIELDS.NAME]: "",
  [CONTACT_FORM_FIELDS.EMAIL]: "",
  [CONTACT_FORM_FIELDS.MESSAGE]: "",
};

const ContactForm = ({
  onChange,
}: {
  onChange?: (fieldName: CONTACT_FORM_FIELDS, value: string) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const handleOnChange = (fieldName: string, value: string) => {
    onChange?.(fieldName as CONTACT_FORM_FIELDS, value);
    form.setValue(fieldName as CONTACT_FORM_FIELDS, value);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.NAME}
          render={({ field }) => (
            <FormItem>
              <FormLabel>_name:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.EMAIL}
          render={({ field }) => (
            <FormItem>
              <FormLabel>_email:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={CONTACT_FORM_FIELDS.MESSAGE}
          render={({ field }) => (
            <FormItem>
              <FormLabel>_message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter your message here ..."
                  onChange={(e) => handleOnChange(field.name, e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
