# WWW.METADOT.COM

This is the repository of www.metadot.com website and blog.
Repo url: <https://github.com/metadot/www.metadot.com>

Technology: Next.js, React, Tailwind CSS.
Deployment: Netlify.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing/creating pages or components by editing/creating `.tsx` files. The local website auto-updates as you edit the files.

## How to Write a New Blog Article

Follow these steps carefully and your article will appear on the site automatically (for the next release).

### 1. Create a New Blog File

All blog articles live inside this folder: `src/app/blog-articles`.

Each post should be organized by **year** and **month**.
For example, if you're writing a post in October 2025: `src/app/blog-articles/2025/10/`
Inside that folder, create a new file with your post's name, using **lowercase letters** and **hyphens** instead of spaces: `my-article.mdx`

Full example path: `src/app/blog-articles/2025/10/my-article.mdx`

### 2. Add Post Information (Metadata)

At the very top of the `.mdx` file, copy this block and fill it out:

```mdx
export const blog = {
  title: "",
  author: "",
  date: "",
  image: "",
  alt: "",
  draft: true,
};
```

⚠️ Make sure to keep this block exactly as shown.
It tells the site how to display your article.

Note: All fields are mandatory, please see below for an explanation of what each field should be.

| Field      | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| **title**  | The title of your article (displayed on the blog list)                                       |
| **author** | Your name                                                                                    |
| **date**   | The publish date (format: `YYYY-MM-DD`)                                                      |
| **image**  | Path or URL to the main image                                                                |
| **alt**    | Short description for the image                                                              |
| **draft**  | Set to `true` while writing, it won’t appear on the live site until you change it to `false` |

### 3. Image Rules

- The image used to illustrate your post must be placed in the `/public` folder (or one of its subfolders).
- When you reference the image in the blog article metadata, omit `/public` from the path.

Example: if the image file path is `/public/example/my-photo.png` then in the blog article metadata you should put `/example/my-photo.png`

### 4. Write your Article Below

After the metadata block, leave one blank line for readability, then start using your post using [Markdown format](https://www.markdownguide.org/). Everything that you write after the metadata block will appear on the website.

### 5. Adding Links

When adding links, always use the Markdown link format `[text](url)`, do **not** use `<https://example.com>` as it will break rendering.

Example: `You can find more info on [Das Keyboard](https://www.daskeyboard.com).`

### 6. Publishing the Article

When your article is ready to publish, simply change: `draft: true,` to `draft: false,` and the article will automatically appear with the others.

To preview your article, follow the instructions in the "Getting Started" section of the README, then visit the `/blog/` page in your browser.

That's it! You've published a new blog article.