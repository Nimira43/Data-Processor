class DataProcessor {
  private rawData: number[]
  private processedData: number[]

  constructor(data: number[]) {
    this.rawData = data
    this.processedData = this.processData()
  }

 
}