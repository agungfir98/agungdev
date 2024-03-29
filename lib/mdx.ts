import fsPromise from 'fs/promises'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { toTitleCase, toSlug, getReadTime } from '../utils'

export const getFileData = async (folPath: any) => {
  return await fsPromise.readdir(path.join(folPath), 'utf-8').then((res) =>
    res.map((v) => {
      const markdownWithMeta = fs.readFileSync(path.join(folPath, v), 'utf-8')
      const { data: formatter, content } = matter(markdownWithMeta)

      const titleTitleCase = toTitleCase(formatter.title)
      const createdAt = formatter.createdAt
      const slug = toSlug(formatter.title)
      const truncate = content.substring(0, 200)
      const readTime = getReadTime(content)
      const draft = formatter.draft

      const data = {
        title: titleTitleCase,
        createdAt,
        slug,
        truncate,
        readTime,
        draft,
      }

      return data
    })
  )
}
// export const getMetaData = async (folPath: any) => {
//   return await fsPromise.stat(path.join(folPath)).then((res) => {
//     return { createdAt: res.birthtimeMs, updatedAt: res.mtimeMs };
//   });
// };
export const getFrontPostData = (fileData: any) => {
  const filteredData = fileData.filter((data: any) => {
    if (!data.draft) return data
  })
  return filteredData.map((v: any) => {
    const { createdAt, readTime, slug, title, truncate } = v

    return {
      readTime,
      slug: `/posts/post/${slug}`,
      title,
      truncate,
      createdAt,
    }
  })
}

export const getContentData = async (folPath: string, opt: string) => {
  return await fsPromise.readdir(path.join(folPath, opt), 'utf-8')
}
