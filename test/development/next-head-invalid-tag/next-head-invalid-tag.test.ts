import { nextTestSetup } from 'e2e-utils'

describe('next/head invalid tag', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('filters out tags that are not valid inside <head>', async () => {
    const html = await next.render('/')
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/)?.[1] ?? ''

    // The invalid <html> tag should be stripped from the <head>.
    expect(head).not.toContain('<html')
    // Valid tags around it should still be rendered.
    expect(head).toContain('Valid title')
    expect(head).toContain('after invalid tag')
  })

  it('warns about the invalid tag in development', async () => {
    await next.render('/')
    expect(next.cliOutput).toMatch(
      /A <html> tag was provided to next\/head.*The <html> tag will be ignored/
    )
  })
})
