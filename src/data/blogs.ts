export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Art of Pour Over Coffee",
    description: "Master the technique of pour-over brewing for the perfect cup",
    content: `
# The Art of Pour Over Coffee

Pour-over coffee is a manual brewing method that involves pouring hot water over ground coffee in a filter. Here's why it's special:

## Key Benefits
- **Complete control** over brewing variables
- *Better extraction* of coffee flavors
- Enhanced aroma and clarity

### Essential Equipment
1. Coffee dripper
2. Paper filters
3. Gooseneck kettle
4. Fresh coffee beans

> "The pour-over method is like meditation - it requires patience, precision, and presence."

For detailed instructions, visit our [brewing guide](/recipes).

\`\`\`
Water temperature: 195-205°F
Coffee-to-water ratio: 1:16
Total brew time: 3-4 minutes
\`\`\`
    `,
    author: "Coffee Master",
    publishDate: "2024-03-15",
    readTime: "5 min",
    imageUrl: "/images/image1.jpeg",
    tags: ["brewing", "technique", "pour-over"]
  },
  {
    id: "2",
    title: "Understanding Coffee Roast Levels",
    description: "From light to dark: exploring different coffee roast profiles",
    content: `<article>
  <h2>Coffee Roast Levels Explained</h2>
  <p>Coffee roasting is an art that transforms green coffee beans into the aromatic beans we know and love.</p>
  
  <div class="roast-levels">
    <h3>Light Roast</h3>
    <ul>
      <li>Light brown color</li>
      <li>No oil on surface</li>
      <li>Higher acidity</li>
      <li>Origin flavors preserved</li>
    </ul>

    <h3>Medium Roast</h3>
    <ul>
      <li>Medium brown color</li>
      <li>Balanced flavor</li>
      <li>More body than light roast</li>
      <li>Popular choice for most</li>
    </ul>

    <h3>Dark Roast</h3>
    <ul>
      <li>Dark brown color</li>
      <li>Oily surface</li>
      <li>Bold, rich flavor</li>
      <li>Less acidity</li>
    </ul>
  </div>

  <p><strong>Pro Tip:</strong> The perfect roast is a personal choice that's influenced by your taste preferences.</p>
</article>`,
    author: "Roast Expert",
    publishDate: "2024-03-10",
    readTime: "7 min",
    imageUrl: "/images/image2.jpeg",
    tags: ["roasting", "coffee-beans", "education"]
  },
  {
    id: "3",
    title: "Coffee Bean Storage Guide",
    description: "Learn how to properly store your coffee beans to maintain freshness",
    content: `
## The Science of Coffee Storage

Proper coffee storage is crucial for maintaining flavor and freshness. Here's what you need to know:

### Key Factors Affecting Coffee Freshness

1. **Temperature**
   - Store at room temperature
   - Avoid refrigeration
   - Keep away from heat sources

2. **Light Exposure**
   - Store in opaque containers
   - Avoid clear glass jars
   - Keep away from direct sunlight

3. **Air Contact**
   - Use airtight containers
   - Consider one-way valve bags
   - Avoid paper bags for long-term storage

### Best Practices

| Storage Method | Pros | Cons |
|----------------|------|------|
| Airtight container | Excellent seal, reusable | Initial cost |
| Valve bag | Releases CO2, blocks oxygen | Single-use |
| Mason jar | Readily available | Light exposure |

*Remember: Buy fresh beans in small quantities and use within 30 days of roasting.*

![Coffee Storage Tips](/images/image3.jpeg)

For more brewing tips, check out our [brewing guides](/guides).
    `,
    author: "Storage Specialist",
    publishDate: "2024-03-20",
    readTime: "6 min",
    imageUrl: "/images/image1.jpeg",
    tags: ["storage", "freshness", "education"]
  }
]; 