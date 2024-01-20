// pages/api/templates.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const templatesDirectory = path.join(process.cwd(), 'templates');
  const filenames = fs.readdirSync(templatesDirectory);

  const templateName = req.query.templateName;

  if (templateName) {
    const filePath = path.join(templatesDirectory, `${templateName}.json`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const template = JSON.parse(fileContents);
      res.status(200).json(template);
    } else {
      res.status(404).json({ message: 'Template not found' });
    }
  } else {
    const templates = filenames.map(filename => {
      const filePath = path.join(templatesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    });

    res.status(200).json(templates);
  }
}