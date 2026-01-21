import Link from "next/link";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
      <p className="mb-6 text-slate-600">Have a question or want to work together? Send us a message and we'll respond within 1-2 business days.</p>

      <form className="grid grid-cols-1 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Name</span>
          <input name="name" className="mt-1 p-3 border rounded-md" placeholder="Your name" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input name="email" className="mt-1 p-3 border rounded-md" placeholder="you@example.com" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Message</span>
          <textarea name="message" rows={6} className="mt-1 p-3 border rounded-md" placeholder="Tell us about your project..."></textarea>
        </label>

        <div className="flex items-center gap-4">
          <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-md">Send message</button>
          <Link href="/" className="text-sm text-slate-600 hover:underline">Return home</Link>
        </div>
      </form>
    </section>
  );
}
