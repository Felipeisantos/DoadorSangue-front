import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload-service';

@Component({
  selector: 'app-nova-analise',
  templateUrl: './nova-analise.component.html',
  styleUrls: ['./nova-analise.component.css']
})
export class NovaAnaliseComponent {
  uploadedJson: any
  uploading = false

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any) {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.readAsText(file)

      reader.onload = () => {
        this.uploadedJson = JSON.parse(reader.result as string)
      }
    }
  }

  async uploadJson() {
    try {
      this.uploading = true
      const response = await this.uploadService.uploadJson(this.uploadedJson)
      console.log('Upload successful', response)
    } catch (error) {
      console.error('Upload failed', error)
    } finally {
      this.uploading = false
    }
  }
}
