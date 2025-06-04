# Tag Input Project

## Setting

- **Yarn version**: 1.22.22^
- **Node version**: 20.19.2^

## Scripts

- `yarn create` - สำหรับสร้างโปรเจค
- `yarn build` - สำหรับ build
- `yarn dev` - สำหรับ development

## Technical Stack

- React TypeScript (Next.js)
- `globals.css` - เป็นตัวกำหนด CSS
- Tag Input - กำหนดไว้ที่ Components

## Requirements

### Add Tags

- รองรับการเพิ่ม tags ด้วย **Enter**
- รองรับ customizable separator
- รองรับการเพิ่ม tags ด้วย **Spacebar**

### Remove Tags

- กำหนดไว้เป็นปุ่ม **X**

### Set Max Limit Tag

- จำกัดไว้ที่ **5 Tags**
- เมื่อเกินจำนวนที่กำหนดจะแสดง warning

### Set Validation

- ป้องกันกรณีกรอกค่าซ้ำ
- แสดง warning เมื่อมีการกรอกค่าซ้ำ
