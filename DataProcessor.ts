class DataProcessor {
  private rawData: number[]
  private processedData: number[]

  constructor(data: number[]) {
    this.rawData = data
    this.processedData = this.processData()
  }

  public getProcessedData(): number[] {
    return this.processedData
  }

  private processData(): number[] {
    return this.rawData.map(num => (num - Math.min(...this.rawData)))
  }
}

const rawData = [45.959, 43.272, 52.226, 48.185, 46.195, 44.927]

const processor = new DataProcessor(rawData)

console.log('Processed Data: ', processor.getProcessedData())