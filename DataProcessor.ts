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
    const minVal = Math.min(...this.rawData) 
    const maxVal = Math.max(...this.rawData) 

    console.log('Raw Data:', this.rawData) 
    console.log('Min Value:', minVal) 
    console.log('Max Value:', maxVal)

    return this.rawData.map(num => { 
      const normalisedValue = (num - minVal) / (maxVal - minVal) 
      console.log(`Original: ${num}, Normalised: ${normalisedValue}`) 
      return normalisedValue 
    })
  }
}

const rawData = [45.959, 43.272, 52.226, 48.185, 46.195, 44.927]

const processor = new DataProcessor(rawData)

console.log('Processed Data: ', processor.getProcessedData())