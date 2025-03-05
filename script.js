function updatePreview() {
    const accountName = document.getElementById("accountName").value;
    const vehicleCondition = document.getElementById("vehicleCondition").value;
    const phone = document.getElementById("phone").value;
    const carBrand = document.getElementById("carBrand").value;
    const carModel = document.getElementById("carModel").value;
    const carLocation = document.getElementById("carLocation").value;
    const repairTime = document.getElementById("repairTime").value;
    const subTotal = document.getElementById("subTotal").value;
    const tax = document.getElementById("tax").value;
    const total = document.getElementById("total").value;
    const warranty = document.getElementById("warranty").value;

    const previewContent = `
        <div class="preview-template">
            <h1>SUPER 5</h1>
            <h2>变速箱维修咨询</h2>
            <div class="customer-info">
                <h3>客户信息：</h3>
                <p>账户名称：${accountName}</p>
                <p>车辆状况：${vehicleCondition}</p>
                <p>联系电话：${phone}</p>
                <p>汽车品牌：${carBrand}</p>
                <p>车型年份：${carModel}</p>
                <p>车辆位置：${carLocation}</p>
            </div>
            <div class="maintenance-plan">
                <h3>维护计划1</h3>
                <p>维修时间：${repairTime}</p>
                <p>更换变速箱配件</p>
                <p>Sub Total: $${subTotal}</p>
                <p>Tax: ${tax}%</p>
                <p>Total: $${total}</p>
                <p>质保时间：${warranty}</p>
            </div>
            <div class="footer">
                <p>Dedicated customer service</p>
                <p>www.super5gearbox.com</p>
                <p>+971 526 555555</p>
            </div>
        </div>
    `;

    document.getElementById("previewContent").innerHTML = previewContent;
}

function exportAsImage() {
    const previewContent = document.getElementById("previewContent");
    html2canvas(previewContent).then(canvas => {
        const link = document.createElement("a");
        link.download = "报价单.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

function exportAsPDF() {
    const previewContent = document.getElementById("previewContent");
    html2canvas(previewContent).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save("报价单.pdf");
    });
}

