import { useState } from "react";

export default function useForm(body) {
  const [form, setForm] = useState(body);
  const handleForm = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return [form, handleForm];
}
